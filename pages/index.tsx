import styled from '@emotion/styled'
import {map, range} from 'lodash'


const item = {
  "collectionName": "BUGCITY",
  "contractAddress": "0x0084837cc386150e56c0e93f2e59469579da5443",
  "lowName": "bugcity#1",
  "owner": "0x93e5FdEf9a056156BbE83b132725FbAd77eAF958",
  "name": "BugCity #1",
  "image": "ipfs://QmbjyyRTB1cYFQ4Zzrhrj1Pjox651HjqUx7U2gpn7TnXKb/1.png",
  "gatewayImage": "https://nft-cdn.alchemy.com/eth-mainnet/09ddf3197aa50a83e042736548fc8062",
  "thumbnail": "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/09ddf3197aa50a83e042736548fc8062",
  "tokenId": "1",
  "likeCount": 8,
  "unLikeCount": 6,
  "commentCount": 15
}


export default function Home() {
  const arr = range(1, 1000)

  return (
    <Container>
      <Row>
        {map(arr, (item, index) => {
          return (
            <Col key={index}>
              <Item index={index}/>
            </Col>
          )
        })}
      </Row>
      <Item/>
    </Container>
  )
}

export const Item = ({index}:any) => {
  return (
    <ItemContainer>
      <div className="header">
        <div className="name">{item.name}</div>
        <div className="num">#{index + 1}</div>
      </div>
      <div className="thumb">
        <img src={item.thumbnail} alt=""/>
      </div>

      <div className="detail">
        <div>{item.likeCount}%</div>
        <div>{item.unLikeCount}%</div>
      </div>
      <div className="gauge">
        <div className="left"></div>
        <div className="right"></div>
      </div>
    </ItemContainer>
  )
}

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Col = styled.div`
  width: 20%;
  padding: 10px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 50%;
  }
`;

const ItemContainer = styled.div`
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
  background: #eee;

  .header {
    display: flex;
    flex-direction: column;
    gap: 6px;
    .name {
      font-size: 18px;
      font-weight: 500;
      text-transform: capitalize;
      line-height: 22px;
    }
    .num {
      font-family: "Fira Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: -0.02em;
    }
  }
  
  .thumb {
    position: relative;
    margin-top: 12px;
    margin-bottom: 12px;
    height: 180px;
    width: 180px;
    overflow: hidden;
    border-radius: 4px;
    background-size: cover;
    background-position: center center;
    background-image: url('https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/e4ae80a81d0943130e2740fa559078e0');
    &::before, &::after  {
      position:absolute;
      width: 100%;
      height: 100%;
      border:1px solid #A9ACE3;
      border-radius: 4px;
    }
    &::before {
      border-bottom: 0;
      border-right: 0;
    }
    &::after {
      border-top: 0;
      border-left: 0;
    }
  }

  img {
    margin-bottom: 8px;
  }

  .detail {
    display: flex;
    align-items: center;
    font-size: 12px;
    justify-content:space-between;
    color: #333;
  }
  .gauge {
    display: flex;
    align-items: center;
    .left {
      width: 50%;
      height: 10px;
      background:#18f;
    }
    .right {
      width: 50%;
      height: 10px;
      background:#ff5252;
    }
  }

`;



