import styled from 'styled-components';

import { shade } from 'polished';


export const Container = styled.div`
  > header {
    height: 100px;
    background: #28262e;

    display: flex;
    align-items: center;

    div {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    svg {
    color: #999591;
    width: 25px;
    height: 25px;
    }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -100px auto 0;

  width: 100%;
  max-width: 700px;

  form {
    display: flex;
    flex-direction: column;
    margin: 25px 0 20px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
    }
  }

  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }
    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }

  input[name='old_password'] {
  margin-top: 24px;
  }
`;

export const AvatarInput = styled.div`
  position: relative;
  width: 160px;
  align-self: center;

  img {
  height: 150px;
  width: 150px;

  border-radius: 50%;
  }

  label {
    position: absolute;
    width: 48px;
    height: 48px;

    background: #ff9000;
    border-radius: 50%;
    border: none;
    right: 0;
    bottom: 0;
    transition: background-color 0.2s;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
    display: none
    }

    &:hover {
    background: ${shade(0.2, '#ff9000')}
    }
 }

    svg{
    width: 20px;
    height: 20px;
    color: #312e38;

    }


`;



