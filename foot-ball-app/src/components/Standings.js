import React,{useState,useEffect}from 'react'
import Loader from "react-loader-spinner"
import axios from 'axios'

const Standings = () => {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [selectedLeague,setSelected]=useState("eng.1");
    const [selectedYear,setSelectedYear]=useState("2022");
    return (
    <div className='standings-container'>
        <div className='select-container'>
            <select
            name='select-league'
            id='select-league'>
            {/* // defaultValue={selectLeague}> */}
            {/* // onChange={(e)=>setSelectLeague(e.target.value)}> */}
                <option value="arg.1">Argentine liga de futbol</option>
                <option value="aus.1">Australian A-league</option>
                <option value="bra.1">Brazilian serie A</option>
                <option value="chn.1">Chinese superleague</option>
                <option value="dut.1">Dutch fredivise</option>
                <option value="eng.1">English premier league</option>
                <option value="fre.1">French league 1</option>
                <option value="ger.1">German Bundesliga</option>
                <option value="ind.1">Indonesian liga 1</option>
                <option value="ita.1">Italian serie A</option>
                <option value="jap.1">Japanese j league</option>
                <option value="mal.1">Malysian Super League</option>
                <option value="mex.1">Mexican liga BBVA MX</option>
                <option value="por.1">Portuguese liga</option>
                <option value="rus.1">Rusian premier league</option>
                <option value="sin.1">Singaporean premier league</option>
                <option value="lal.1">Laliga primera Division</option>
                <option value="tha.1">Thai premier league</option>
                <option value="tur.1">Turkish superliga</option>
                <option value="uga.1">Ugandan super league</option>
            </select>
            <div>
                <select className='year-select'>
                    <option>1990</option>
                    <option>1991</option>
                    <option>1992</option>
                    <option>1993</option>
                    <option>1994</option>
                    <option>1995</option>
                    <option>1996</option>
                    <option>1997</option>
                    <option>1998</option>
                    <option>1999</option>
                    <option>2000</option>
                    <option>2001</option>
                    <option>2002</option>
                    <option>2003</option>
                    <option>2004</option>
                    <option>2005</option>
                    <option>2006</option>
                    <option>2007</option>
                    <option>2008</option>
                    <option>2009</option>
                    <option>2010</option>
                    <option>2011</option>
                    <option>2012</option>
                    <option>2013</option>
                    <option>2014</option>
                    <option>2015</option>
                    <option>2016</option>
                    <option>2017</option>
                    <option>2018</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                </select>
            </div>
        </div>
    </div>
    )
}

export default Standings