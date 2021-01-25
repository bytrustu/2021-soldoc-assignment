import React, { useEffect, useState } from 'react';
import Main from '../container/Main';
import logo from '../static/images/logo.svg';
import {
  Progress,
  Logo,
  Label,
  Title,
  TextArea,
  DateText,
} from '../components';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const INIT_PERCENT = 33.33;
const DATE_TEXT = '08 / 15 / 2020';

const StyleTimeText = styled.div`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  color: #B0B0B0;
  height: 90px;
`;

const ReservationBlank = ({ history }) => {

  const { data } = useSelector(state => state.reservation);

  const [progress, setProgress] = useState(INIT_PERCENT);

  useEffect(() => {
    const { time } = data;
    if (!time) {
      history.push('/');
    }
  }, [data]);

  return (
    <Main>
      <Progress value={progress} />
      <Logo src={logo} />
      <Title title="진료 예약 확인" text="진료 날짜 예약" />
      <Label title="날짜">
        <DateText date={DATE_TEXT} />
      </Label>
      <Label title="시간">
        <StyleTimeText>
          *진료 가능한 시간이 없습니다.
        </StyleTimeText>
      </Label>
      <Label title="추가 사항 (옵션)">
        <TextArea
          placeholder="평소 앓고 있던 질병, 또는 처방전 솔닥 닥터가 알아야 할 내용이 있다면 여기에 적어주세요."
          isDisabled={false}
          value={data.more}
          isViewByte={false}
          isReadonly={true}
        />
      </Label>
    </Main>
  );
};

export default ReservationBlank;