import React, { useState, useEffect } from "react";
// import { getAssets } from "../../api";
import './assets.less'
import Nav from "../nav";
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
export default function assetsList() {
    const [data, setData] = useState(null);
    useEffect(() => {
        const query = window.location.pathname.substring(8);
        console.log(query)
        const fetchData = async () => {
            const result = await axios.get(`https://api.fsn365.com/assets/${query}`)
            setData(result.data.data)
        };
        fetchData();
    }, []);
    return (
        <div>
            <Nav />
            {data && (
                <div className="page-main">
                    <header>
                        <h3>
                            {console.log(data)}
                            Assets <small>{`#${data.symbol}`}</small>
                        </h3>
                    </header>
                </div>
            )}
            {data && (
                <TableContainer component={Paper} className='assets-table'>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Asset Name:<p>{data.name}</p></TableCell>
                            </TableRow>
                            <TableRow><TableCell>Asset Symbol:<p>{data.name}</p></TableCell></TableRow>
                            <TableRow><TableCell>Asset ID:<p>{data.symbol}</p></TableCell></TableRow>
                            <TableRow><TableCell>Decimals:<p>{data.id}</p></TableCell></TableRow>
                            <TableRow><TableCell>Supply:<p>{data.decimals}</p></TableCell></TableRow>
                            <TableRow><TableCell>Changeable Supply:<p>{data.verified}</p></TableCell></TableRow>
                            <TableRow><TableCell>Issuer:<p className='p1'>{data.issuer}</p></TableCell></TableRow>
                            <TableRow><TableCell>Description:<p>{data.description ? "" : data.description}</p></TableCell></TableRow>
                            <TableRow><TableCell>Issue Height:<p className='p1'>{data.issueBk}</p></TableCell></TableRow>
                            <TableRow><TableCell>Issue Time:<p>{data.time}</p></TableCell></TableRow>
                            <TableRow><TableCell>Verified:<p>{data.verified}</p></TableCell></TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            )}
        </div>
    )
}
