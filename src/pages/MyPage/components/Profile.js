import styled from "styled-components";

const ProfileContainer = styled.div`
    display : flex;
    flex-direction : column;
    color: #383838;
    padding-top : 139px;
    padding-left : 37px;
    margin-bottom : 113px;
`
const Title = styled.div`
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
`

const SubTitle = styled.div`
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top : ${props => props.px}
`

const Form = styled.div`
    display : flex;
    gap : 20px;
`

const InputName = styled.input`
    border-bottom: 1px solid #CFCFCF;
    width: 238px;
    &:focus {outline: none;}
`

const AlterBtn = styled.button`
    display: flex;
    width: 72px;
    height: 51px;
    padding: 15px 20px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 62px;
    background: ${props => props.background};
    color: #FFF;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`
// background-props => #6BB8FF(활성화) or #616161(비활성화)

const Email = styled.div`
    color: #616161;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    margin-top: 16px;
    line-height: normal;
`

const Profile = () => {
    return (
        <ProfileContainer>
            <Title>프로필 변경</Title>
            <SubTitle px="30px">이름</SubTitle>
            <Form>
                <InputName type="text" placeholder="홍길동" />
                <AlterBtn background="#616161">변경</AlterBtn>
            </Form>
            <SubTitle px="46px">이메일</SubTitle>
            <Email>exgample@gmail.com</Email>
        </ProfileContainer>
    )
}
export default Profile;