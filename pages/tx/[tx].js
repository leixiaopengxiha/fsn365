import React, { useState, useEffect } from 'react'
import { getTx } from '../../api'
import Nav from '../nav'
import Bottom from '../bottom'
import './tx.less'

function index() {
    const [txDatas, setTxDatas] = useState(null)
    useEffect(() => {
        const a = window.location.pathname
        var reg = /(?=\/)/g;
        var utld = null
        a.replace(reg, ($, $1) => {
            utld = a.slice($1 + 1)
        })
        // console.log();
        const txfn = async () => {
            const result = await getTx(utld)
            console.log(result.data);
            setTxDatas(result.data)
        }
        txfn()
    }, [])
    const aa = (date) => {
        var d = new Date(date);
        var yue = (d.getMonth() + 1) > 9 ? (d.getMonth() + 1) : '0' + (d.getMonth() + 1);
        var re = d.getDate() > 9 ? d.getDate() : '0' + d.getDate();
        var youWant = d.getFullYear() + '.' + yue + '.' + re;
        return youWant
    }
    return (
        <div className='tx-box'>
            <Nav></Nav>
            <div className='tx-content'>
                <div className='tx-title'>
                    <h4>Tx</h4>
                    <h4 className='sss'># TimeLock</h4>
                </div>
                <div className='tx-con'>
                    {
                        txDatas === null ? <div></div> : <div>
                            <div>
                                <span> Hash：</span>
                                <a href="">
                                    {`${txDatas.hash}`}
                                </a>
                            </div>
                            <div>
                                <span>  Lock Type：</span>
                                {`${txDatas.type}`}
                            </div>
                            <div>
                                <span> Value：</span>
                                {`${txDatas.info.value} `}
                                <a href="">{` ${txDatas.info.symbol}`}</a>
                            </div>
                            <div>
                                <span> Duration：</span>
                                {`${aa(0)} ~ ${aa(txDatas.info.duration.endTime * 1000)}`}


                            </div>


                        </div>
                    }

                </div>
            </div>
            <Bottom></Bottom>
        </div>
    )
}

export default index
