import React from 'react';
import useFetch from '../../hooks/useFetch';
import "./featured.css";

const Featured=() => {

    const {data, loading, error}=useFetch("/hotels/countByCity?cities=toronto,los angeles,oslo");

    return (
        <div className="featured">
            {loading? ("Loading Please Wait"):(<><div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Toronto</h1>
                    <h2>{data[0]} Properties</h2>
                </div>
            </div>
                <div className="featuredItem">
                    <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="" className="featuredImg" />
                    <div className="featuredTitles">
                        <h1>Los Angeles</h1>
                        <h2>{data[1]} Properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="" className="featuredImg" />
                    <div className="featuredTitles">
                        <h1>Oslo</h1>
                        <h2>{data[2]} Properties</h2>
                    </div>
                </div></>)}
        </div>
    );
}

export default Featured;
