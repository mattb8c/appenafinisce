import React, { useState, useEffect } from 'react';
import './Results.css';
import texts from '../../config/texts';
import ResultItem from './ResultItem';
import firebase from '../../config/firebase';
import 'firebase/firestore';
import { Link, useLocation, useHistory } from "react-router-dom";
import useLoader from '../../utils/useLoader';



function Results() {

  const history = useHistory();
  const location = useLocation();
  const input = location.state ? location.state.input : '';

  const [loader, loading, setLoading] = useLoader(true);
  const [results, setResults] = useState([]);


  //load results
  useEffect(() => {

    async function getResults() {

      const db = firebase.firestore();
      const snapshot = await db.collection('business').where('searchText', '==', input).get();

      const foundResults = [];

      snapshot.forEach(doc => {

        const result = doc.data();
        result.id = doc.id;
        foundResults.push(result);

      });

      setResults(foundResults);
      setLoading(false);

    }//getResults

    getResults();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);


  function openBusiness(result) {

    history.push({
      pathname: '/business/' + result.id,
      state: { businessData: result }
    });

  }//openBusiness


  function renderResults() {

    if (loading || results.length === 0) {
      return null;
    }

    const items = results.map((result) =>
      <ResultItem
        key={result.id}
        result={result}
        onClick={() => openBusiness(result)} />
    );

    return <ul>
      {items}
    </ul>;

  }//renderResults


  function renderNoResults() {

    if (loading || results.length > 0) {
      return null;
    }

    return <div className="NoResults">
      <p>{texts['results_not_found']}</p>
    </div>

  }//renderNoResults


  return (
    <div className="Results">

      <h1>Risultati</h1>

      <div className="Content">
        {renderResults()}
        {renderNoResults()}
        {loader}
      </div>

      <Link className="Link" to="/newPlace">{texts['results_no_business']}</Link>

    </div>
  );

}//Results

export default Results;
