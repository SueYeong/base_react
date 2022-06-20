import styled from "styled-components";
import { BottomPlay } from "./components/BottomPlay";
import { BtnWrap } from "./components/BtnWrap";
import { Header } from "./components/Header";
import { PlayWrap } from "./components/PlayWrap";
import { TitleWrap } from "./components/TitleWrap";

const Wrap = styled.div``;

const Section = styled.section``;

const CoverImg = styled.div``;

export const MusicAppEX = () => {
  return (
    <Wrap>
      <Section>
        <Header />

        <CoverImg></CoverImg>

        <TitleWrap />

        <PlayWrap />

        <BtnWrap />

        <BottomPlay />
      </Section>
    </Wrap>
  );
};
