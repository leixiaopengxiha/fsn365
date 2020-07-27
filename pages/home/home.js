import React from 'react'
import './home.less'

const index = () => {
    const [btnshow, setBtnshow] = React.useState(false);
    const [seltext, setSeltext] = React.useState('All Filters');

    const setShow = (e, a) => {
        e.nativeEvent.stopImmediatePropagation()
        e.stopPropagation()
        setBtnshow(a)
    }
    const setSetexts = (a) => {
        setSeltext(a)
        setBtnshow(false)
    }
    return (
        <div>
            <div className='home-box' onClick={(e) => setShow(e, false)} >
                <div className='home-search'>

                    <p>Fusion Blockchain Explorer</p>
                    <div className='home-input-box'>
                        <div className='home-selebox'>
                            <button className='home-btn' onClick={(e) => setShow(e, true)}>{`${seltext}`}</button>
                            <div className={btnshow ? 'home-show-box home-show' : 'home-show-box home-onshow'}>
                                <div onClick={() => setSetexts('All Filters')}>All Filters</div>
                                <div onClick={() => setSetexts('Asset')}>Asset</div>
                                <div onClick={() => setSetexts('Address')}>Address</div>
                                <div onClick={() => setSetexts('Transactions')}>Transactions</div>
                            </div>
                        </div>
                        <div className='home-input'>
                            <input type="text" />
                            <div>🔍</div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}


export default index
