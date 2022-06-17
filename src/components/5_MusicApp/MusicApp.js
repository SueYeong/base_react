import { faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Bg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100wh;
  height: 100vh;
  background-color: lightgray;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 375px;
  height: 667px;
  background-color: #1d1d1d;
  padding: 20px;
  border-radius: 18px;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Down = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  i {
    color: #1d1d1d;
  }
`;

const Bars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid white;
  border-radius: 50%;
  i {
    color: white;
  }
`;

const Albun = styled.div`
  width: 250px;
  height: 300px;
  border-radius: 15px;
  background-image: url(https://wallpaper.dog/large/20496736.jpg);
  background-size: cover;
  margin: 20px auto 0 auto;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 25px;
  color: white;
  font-weight: 900;
  margin-top: 20px;
`;

const Singer = styled.div`
  font-size: 15px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 100;
  margin-top: 10px;
`;

const Musiclength = styled.div`
  width: 335px;
  height: 5px;
  background-color: #888;
  margin-top: 20px;
`;

const Strimming = styled.div`
  width: 35px;
  height: 5px;
  background-color: orangered;
`;

const Side = styled.div`
  font-size: 8px;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  width: 335px;
  justify-content: space-between;
  margin-top: 5px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 335px;
  margin-top: 20px;

  i {
    color: lightgray;
  }
  svg {
    color: lightgray;
  }
`;

const Namebar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 65px;
  border-radius: 50px;
  background-color: white;
  margin-top: 20px;
`;

const Profile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-image: url(https://c4.wallpaperflare.com/wallpaper/212/380/10/smoke-widescreen-backgrounds-wallpaper-preview.jpg);
  background-size: cover;
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: 900;
  color: #888;
  margin-left: 10px;
`;

const Circle = styled.div`
  i {
    color: #1d1d1d;
  }
`;

export const MusicApp = () => {
  return (
    <Bg>
      <Wrap>
        <Menu>
          <Down>
            <i className="fa-solid fa-angle-down"></i>
          </Down>
          <Bars>
            <i className="fa-solid fa-bars"></i>
          </Bars>
        </Menu>
        <Albun />
        <Main>
          <Title>Blue bird</Title>
          <Singer>Pick Dreams</Singer>
        </Main>
        <Musiclength>
          <Strimming></Strimming>
          <Side>
            <div>00:03</div>
            <div>03:40</div>
          </Side>
        </Musiclength>
        <Icon>
          <i className="fa-solid fa-shuffle"></i>
          <i className="fa-solid fa-backward"></i>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "salmon",
            }}
          >
            <FontAwesomeIcon icon={faPause} />
          </div>
          <i className="fa-solid fa-forward"></i>
          <i className="fa-solid fa-repeat"></i>
        </Icon>
        <Namebar>
          <div
            style={{
              width: "315px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Profile></Profile>
              <Name>SueYeong</Name>
            </div>
            <Circle
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "0.1px solid lightgray",
              }}
            >
              <i className="fa-solid fa-forward-step"></i>
            </Circle>
          </div>
        </Namebar>
      </Wrap>
    </Bg>
  );
};
