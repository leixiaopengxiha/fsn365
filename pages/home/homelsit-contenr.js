import React, { useEffect } from 'react'
import Link from 'next/link'
import './homelsit-contenr.less'
import { getLatest } from '../../api'


function HomelsitContenr() {

    const [leftdata, setLeftdata] = React.useState([]);
    const [rightdata, setRightdata] = React.useState([]);
    useEffect(() => {
        const listData = async () => {
            const result = await getLatest()
            if (result.data === undefined) {
                listData()
                return
            }
            setLeftdata(result.data.txs)
            setRightdata(result.data.bks)
        }
        let tiems = setInterval(() => {
            listData()
            setLeftdata([])
            setRightdata([])
        }, 30000);
        listData()
        return () => {
            clearInterval(tiems)
        }

    }, [])
    return (
        <div className='homelsit-contenr'>
            <div className='con-left'>
                <div className='con-top'>
                    <h4>Latest Txns</h4>
                    <h4 className='yan'>
                        <Link href='/txns'>
                            <a>
                                View All
                            </a>
                        </Link>
                    </h4>
                </div>
                {/* 循环内容 */}
                <div className='con-content'>
                    {
                        leftdata.length === 0 ? '' : leftdata.map((data, index) => (
                            <div className='con-item' key={index}>
                                <div className='item-letf' >
                                    <div className='txn'>Txn</div>
                                    <div>
                                        <a>{`${data.hash}`}</a>
                                        <p>1 day ago</p>

                                    </div>
                                </div>
                                <div className='item-right'>
                                    <div>
                                        <p>From</p>
                                        <a>{`${data.from}`}</a>
                                    </div>

                                    <div>
                                        <p>To</p>
                                        <a>{`${data.to}`} </a>

                                    </div>
                                </div>
                                <div>
                                    {`${data.type}`}
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
            <div className='con-right'>
                <div className='con-top'>
                    <h4>
                        Latest Blocks
                    </h4>
                    <h4 className='yan'>
                        <Link href='/blocks'>
                            <a>
                                View All
                            </a>
                        </Link>
                    </h4>
                </div>
                {/* 循环内容 */}
                <div className='con-content'>
                    {
                        rightdata.length === 0 ? '' : rightdata.map((data, index) => (
                            <div className='con-item' key={index}>
                                <div className='item-letf'>
                                    <div className='block'>BK</div>
                                    <div>
                                        <a>{`${data.height}`}</a>
                                        <p>1 day ago</p>

                                    </div>
                                </div>
                                <div className='item-right'>
                                    <div>
                                        <p>Miner</p>
                                        <a>{`${data.miner}`}</a>
                                    </div>

                                    <div>
                                        <a>{`${data.txns}`}txns </a><p>&nbsp; in block.</p>
                                    </div>
                                </div>
                                <div>
                                    {`${data.reward}`} FSN
                            </div>
                            </div>
                        ))
                    }

                </div>


            </div>
        </div >
    )
}

export default HomelsitContenr
