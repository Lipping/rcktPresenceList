import styled from "@emotion/styled"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width:100%;
    height: 72px;
    background-color: #262626;
    border-radius: 8px;
    padding: 16px;
    border:1px solid #333333;
    cursor: pointer;
    &:hover {
        transition: .3s;
        border:1px solid #5E60CE ;
        background: rgb(38,38,38);
        background: linear-gradient(90deg, rgba(38,38,38,1) 0%, rgba(38,38,38,1) 45%, rgba(46,46,46,1) 100%);
    }
    `;

export const Content = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #222;
    `;

export const Name = styled.h3`
    font-size: 1rem;
    font-weight: normal;
    color: #F2F2F2;
    `;

export const Time = styled.h3`
    font-size: 1rem;
    font-weight: normal;
    color: #808080;
    `;

export const Avatar = styled.img`
    width: 32px;
    clip-path: circle(50% at 50% 50%);
    `;