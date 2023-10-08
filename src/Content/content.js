import './content.css';

import React from 'react';

const content = ({ meaning, textValue, category }) => {
    return <div className='container'>

        {
            meaning[0] && textValue && category === 'en' && (
                <audio style={{ backgroundColor: '#fff', width: '100%', borderRadius: 15 }} src={meaning[0].phonetics[0] && meaning[0].phonetics[0].audio} controls>Your Browser is not supporting </audio>
            )

        }


        {textValue === '' ? (<span style={{ fontSize: '20px', color: '#ffff' }}>START BY TYPING A WORD IN SEARCH</span>) : (
            meaning.map((item) => item.meanings.map((val) => (
                val.definitions.map((items) => (
                    <div className='boxes'>
                        <p>{items.definition}</p>
                        <hr></hr>
                        {
                            items.example && (<span style={{ marginRight: '10px' }}>
                                <b>Example: </b>
                                {items.example}
                            </span>)
                        }
                        {
                            items.synonyms == "" ? (<><b>Synonmys</b> "NA"</>) :
                                (<span>
                                    <b>Synonmys: </b>
                                    {items.synonyms.map((s) => `${s}, `)}
                                </span>)
                        }
                    </div>
                )))))
        )}




    </div>;
}


export default content;