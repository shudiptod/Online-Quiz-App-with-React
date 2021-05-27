import React, { useState, useEffect } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { Button } from 'react-bootstrap';
import { Radio, Space, BackTop } from 'antd';
const Quiz = (props) => {


    const [final, setFinal] = useState(false);
    const [right, setRight] = useState(0);
    const [wrong, setWrong] = useState(0);

    useEffect(

        () => {
            if (final === false) {
                return final;
            }
            else {
                let rCount = 0;
                let wCount = 0;
                props.selected.map(elem => {

                    if (elem.result) {
                        rCount++;
                    }
                    else {
                        wCount++;
                    }
                    return elem;
                });
                setRight(rCount);
                setWrong(wCount);

                //console.log(wrong,right);
            }
        }

        , [final])

    const select = (id, value) => {

        props.selected.map((arrEl, ind) => {
            if (ind === id) {
                arrEl.selected = value;
                if (value === arrEl.correct_answer) {
                    arrEl.result = true;
                }
                else {
                    arrEl.result = false;
                }
            }
            return arrEl;
        })

    };
    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
            return <div className="timer">Too late...</div>;
        }

        return (
            <div className="timer">
                <div className="text">Remaining</div>
                <div className="value"><h2 className="value">{remainingTime}</h2></div>
                <div className="text">seconds</div>
            </div>
        );
    };


    return (
        <div>
            <>
                <div>
                    <CountdownCircleTimer
                        isPlaying
                        duration={100}
                        colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                        onComplete={() => setFinal(true)}
                    >{renderTime}
                    </CountdownCircleTimer>

                </div>
                <div>
                    {props.selected.map((elem, index) => (
                        <div>
                            <h2>{elem.question}</h2>
                            <span className="border">
                                <div>
                                    <div>
                                        <Radio.Group buttonStyle="solid">
                                            <Space direction="vertical">
                                                <Radio.Button id={index} value={elem.choices[0]}
                                                    onChange={(e) => select(e.target.id, e.target.value)}
                                                >{elem.choices[0]} </Radio.Button>
                                                <Radio.Button id={index} value={elem.choices[1]}
                                                    onChange={(e) => select(e.target.id, e.target.value)}
                                                >{elem.choices[1]}</Radio.Button>
                                                <Radio.Button id={index} value={elem.choices[2]}
                                                    onChange={(e) => select(e.target.id, e.target.value)}>
                                                    {elem.choices[2]}</Radio.Button>
                                                <Radio.Button id={index} value={elem.choices[3]} onChange={(e) => select(e.target.id, e.target.value)}
                                                >
                                                    {elem.choices[3]}</Radio.Button>
                                            </Space>
                                        </Radio.Group>
                                       
                                    </div>
                                </div>
                            </span>
                        </div>
                    ))
                    }
                </div>
                <div>
                    <Button variant="primary" onClick={() => setFinal()} >Submit</Button>
                </div>

                <div>
                    <h3>Right Answers: {right}</h3>
                    <h3>Wrong Answers: {wrong}</h3>
                </div>
                <BackTop>
                    <div style={style}>Top</div>
                </BackTop>
            </>




        </div>
    )
}

export default Quiz
const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  };