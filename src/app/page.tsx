import Header from "@/components/Header/Header";
import ProfileImage from "@/components/Main/Profile/ProfileImage";
import Main from "@/components/Main/main";
import { MainText } from '../components/Main/MainText/Maintext';

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <ProfileImage />
        <MainText />
      </Main>
    </>
  )
}
