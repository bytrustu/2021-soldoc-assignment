import React, { useState, useEffect, useCallback } from 'react';
import Main from '../container/Main';
import logo from '../static/images/logo.svg';
import {
  Progress,
  Logo,
  Label,
  Title,
  DateText,
  TimeButton,
  NextButton,
  ConfirmButton,
  TextArea,
} from '../components';
import { Link } from 'react-router-dom';
import TimeWrap from '../container/TimeWrap';
import * as util from '../util';
import { setTextByLimitByte } from '../util';

const timeRange = util.generateTimeRange('16:30', '19:30');

const Reservation = () => {
  const MAX_BYTE = 120;
  const [selectionTime, setSelectionTime] = useState('');
  const [isActiveTextArea, setIsActiveTextArea] = useState(true);
  const [textArea, setTextArea] = useState('');
  const onChangeTextArea = e => {
    const limitText = setTextByLimitByte(e.target.value, MAX_BYTE);
    setTextArea(limitText);
  };

  const onClicTimeHandle = useCallback((e) => {
    setSelectionTime(e.target.value);
    setIsActiveTextArea(false);
  });

  const onClickNextHandle = useCallback(() => {

  });

  return (
    <Main>
      <Progress value={33.3} />
      <Logo src={logo} />
      <Title title="진료 예약하기" text="진료 날짜 예약" />
      <Label title="날짜">
        <DateText date="08 / 15 / 2020" />
      </Label>
      <Label title="시간">
        <TimeWrap>
          {
            timeRange.map(el => <TimeButton text={el} onClickHandle={onClicTimeHandle} active={selectionTime === el} />)
          }
          <NextButton onClickHandle={onClickNextHandle} />
        </TimeWrap>
      </Label>
      <Label title="추가 사항 (옵션)">
        <TextArea
          placeholder="평소 앓고 있던 질병, 또는 처방전 솔닥 닥터가 알아야 할 내용이 있다면 여기에 적어주세요."
          isDisabled={isActiveTextArea}
          value={textArea}
          onChange={onChangeTextArea}
          maxByte={MAX_BYTE}
        />
      </Label>
      {
        selectionTime && <ConfirmButton text="예약" onClickHandle={() => {
        }} />
      }
    </Main>
  );
};

export default Reservation;