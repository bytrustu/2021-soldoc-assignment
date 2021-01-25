import React, { useState, useEffect, useCallback, useRef } from 'react';
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
import TimeWrap from '../container/TimeWrap';
import * as util from '../util';
import { setTextByLimitByte } from '../util';
import { useDispatch, useSelector } from 'react-redux';
import { addReservation, clearReservation } from '../redux/reducers/reservation';

const timeRange = util.generateTimeRange('18:30', '21:30');
const allTimeRange = util.generateTimeRange('09:00', '21:00');
const MAX_BYTE = 120;
const INIT_PERCENT = 33.33;
const DATE_TEXT = '08 / 15 / 2020';

const Reservation = ({ history }) => {
  const dispatch = useDispatch();
  const { success, data } = useSelector(state => state.reservation);

  const [selectionTime, setSelectionTime] = useState('');
  const [isActiveTextArea, setIsActiveTextArea] = useState(true);
  const [textArea, setTextArea] = useState('');
  const [progress, setProgress] = useState(INIT_PERCENT);

  const textAreaRef = useRef();

  const onChangeTextArea = useCallback(e => {
    const limitText = setTextByLimitByte(e.target.value, MAX_BYTE);
    setTextArea(limitText);
    if (limitText) {
      setProgress(INIT_PERCENT * 3);
    } else {
      setProgress(INIT_PERCENT * 2);
    }
  });

  const onClicTimeHandle = useCallback(e => {
    setSelectionTime(e.target.value);
    setIsActiveTextArea(false);
    if (textArea) {
      setProgress(INIT_PERCENT * 3);
    } else {
      setProgress(INIT_PERCENT * 2);
    }
    setTimeout(() => {
      textAreaRef.current.focus();
    }, 10);
  });

  const onClickNextHandle = useCallback(() => {

  });

  const onClicConfirmHandle = () => {
    dispatch(addReservation({ time: selectionTime, more: textArea, date: DATE_TEXT }));
  };

  useEffect(() => {
    const { time, more } = data;
    if (time) {
      setSelectionTime(time);
      setIsActiveTextArea(false);
      setProgress(INIT_PERCENT * 2);
    }
    if (more) {
      setTextArea(more);
      setProgress(INIT_PERCENT * 3);
    }
  }, [data]);

  useEffect(() => {
    if (success) {
      dispatch(clearReservation());
      if (allTimeRange.includes(data.time)) {
        history.push('/confirm');
      } else {
        history.push('/blank');
      }
    }
  }, [success]);

  return (
    <Main>
      <Progress value={progress} />
      <Logo src={logo} />
      <Title title="진료 예약하기" text="진료 날짜 예약" />
      <Label title="날짜">
        <DateText date={DATE_TEXT} />
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
          targetRef={textAreaRef}
          isViewByte={true}
        />
      </Label>
      {
        selectionTime && <ConfirmButton text="예약" onClick={onClicConfirmHandle} />
      }
    </Main>
  );
};

export default Reservation;