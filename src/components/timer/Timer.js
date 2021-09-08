import React from "react";
import {useEffect, useState} from "react";
import {interval, Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {Button, Display, Main} from "./Timer-styled";


export function Timer() {
    const [sec, setSec] = useState(0);
    const [statusValue, setStatusValue] = useState("stop");

    useEffect(() => {
        const myTimer$ = new Subject();
        interval(1000)
            .pipe(takeUntil(myTimer$))
            .subscribe(() => {
                if (statusValue === "start") {
                    setSec(val => val + 1000);
                }
            });
        return () => {
            myTimer$.next();
            myTimer$.complete();
        };
    }, [statusValue]);

    const start = (() => {
        setStatusValue("start");
    });

    const stop = (() => {
        setStatusValue("stop");
        setSec(0);
    });

    const reset = (() => {
        setSec(0);
    });

    let [wasClicked, setWasClicked] = useState(true);

    const wait = (() => {
        if (wasClicked) {
            setWasClicked(false)
            setTimeout(() => {
                setWasClicked(true)
            }, 300)
        }
        if (!wasClicked) {
            setStatusValue("wait");
            setWasClicked(true)
        }
    });

    return (
        <Main>
            <Display>
                <div>{new Date(sec).toISOString().slice(11, 19)}</div>
            </Display>
            <Button>
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
                <button style={{width: '95%'}} onClick={wait}>Wait (2 clicks)</button>
            </Button>
        </Main>
    );
}

