
import React from 'react';
import { useState } from 'react';
import loaderIcon from '../assets/images/loader.gif';


/**
 * 
 * const [loader, loading, setLoading] = useLoader(loading)
 * 
 */


export default function useLoader(initialLoading) {

  const [loading, setLoading] = useState(initialLoading);

  let loader = null;

  if (loading === true) {
    loader = <div className="LoaderWrapper">
      <img className="Loader" src={loaderIcon} alt="loading" />
    </div>;
  }

  return [loader, loading, setLoading];

}//useLoader
