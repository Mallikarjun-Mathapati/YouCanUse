import React, { useState } from 'react'
// import img1 from '../Images/male 5.png'
import data from '../Components/Data';

import LittlePro from '../Sections/LittlePro';
import Practice from '../Sections/Practice';
import ClickBelow from '../Sections/ClickBelow';
import AboutMe from '../Sections/AboutMe';


const MapFilter = () => {
    const [map, setMap] = useState (data);
    // const [color, setColor] = useState (false)

    // const activeH = (e)=> {
    //     // setColor(e.target.id)
    //     console.log('clicked');
    //     setColor(!color)
    // }
    const BtnClick = (e) => {
        const item = data.filter((current)=>{
        return current.hair9_color === e;
        } )
        setMap(item)
        
    }
    const BtnClick1 = (current1) => {
        const item2 = data.filter((e) => {
            return e.gender === current1 ;
        })
        setMap(item2)

    }

    const BtnClick2 = (e) => {
        const item3 = data.filter((current3) => {
            return current3.language === e ;
        });
        setMap(item3)
    }









    const AllClick = ()=> {
        setMap(data)
    }
  return (
    <>
      <div className="mapfilter">
        <div className="map-filter-header">
            <h1>FILTER</h1>
        </div>
        {/* <div className="container"> */}
            <div className="map-filter-main">
                <div className="map-filter-button">
                    <button className='all-filter-btn' onClick={AllClick}>All</button>
                    <div className="map-button-1">
                        <h4>Hair Color</h4>
                        <button onClick={()=> BtnClick("Black")}>Black</button>
                        <button onClick={()=> BtnClick("White")} >White</button>
                        <button onClick={()=> BtnClick("Red")}>Red</button>
                    </div>
                    <div className="map-button-1">
                        <h4>Gender</h4>
                        <button onClick={()=> BtnClick1("Male")} >Male</button>
                        <button onClick={()=> BtnClick1("Female")}>Female</button>
                    </div>
                    <div className="map-button-1">
                        <h4>Language</h4>
                        <button onClick={()=> BtnClick2("Kannada")} >Kannada</button>
                        <button onClick={()=> BtnClick2("English")}>English</button>
                        <button onClick={()=> BtnClick2("Hindi")}>Hindi</button>
                    </div>
                </div>
                <div className="map-filter-grid">
                    {
                        map.map((new1) => {
                            const {name, id, language, email, hair9_color, img, gender } = new1;
                            return (
                                <div className="map-filter-item">
                                <div className="img-id-grid">
                                    <div className="id-gird">
                                        <h1>{id}</h1>
                                    </div>
                                    <div className="img-gird">
                                        <img src={img} alt="photo" />
                                    </div>
                                </div>
                                <h4>{name}</h4>
                                <table>
                                    <tr>
                                        <th>Gender </th>
                                        <td> : {gender}</td>
                                    </tr>
                                    <tr>
                                        <th>Language </th>
                                        <td> : {language}</td>
                                    </tr>
                                    <tr>
                                        <th>Hair Color </th>
                                        <td> : {hair9_color}</td>
                                    </tr>
                                </table>
                                <h5>{email}</h5>
                            </div>

                            )
                        })
                    }
            
                </div>
            </div>
        {/* </div> */}
      </div>
      <LittlePro new7 = 'in-text-conv-block' />
      <Practice />
      <ClickBelow />
      <AboutMe />
    </>
  )
}

export default MapFilter
