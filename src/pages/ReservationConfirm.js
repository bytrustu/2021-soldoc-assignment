import React, { useEffect, useCallback } from 'react';
import Main from '../container/Main';
import logo from '../static/images/logo.svg';
import {
  Logo,
  Label,
  Title,
  ConfirmButton,
  TextArea,
} from '../components';
import { getDate } from '../util';
import { useSelector } from 'react-redux';
import TextInput from '../components/TextInput';

const ReservationConfirm = ({ history }) => {
  const { data } = useSelector(state => state.reservation);

  const onClicConfirmHandle = useCallback(() => {
    alert('완료.');
  });

  useEffect(() => {
    const { time } = data;
    if (!time) {
      history.push('/');
    }
  }, [data]);

  return (
    <Main>
      <Logo src={logo} />
      <Title title="진료 예약확인" text="진료 날짜 예약" />
      <Label title="진료 예약일 및 시간" link="/" linkText="수정하기">
        <TextInput value={`${getDate(data.date)}, ${data.time}`} isReadonly={true} />
      </Label>
      <Label title="추가 사항 (옵션)" link="/" linkText="수정하기">
        <TextArea
          placeholder="평소 앓고 있던 질병, 또는 처방전 솔닥 닥터가 알아야 할 내용이 있다면 여기에 적어주세요."
          value={data.more}
          isDisabled={false}
          isReadonly={true}
        />
      </Label>
      {
        <ConfirmButton text="확인" onClick={onClicConfirmHandle} />
      }
    </Main>
  );
};

export default ReservationConfirm;