import React from 'react'
import PropTypes from 'prop-types';
import "./wordsSplit.css"



const WordsSplit = ({ text, wordsPerLine }) => {
  const words = text.split(' ');
  const firstLine = words.slice(0, wordsPerLine).join(' ');
  const remainingWords = words.slice(wordsPerLine);

  let secondLine = remainingWords.join(' ');
  if (remainingWords.length > wordsPerLine) {
    secondLine = remainingWords.slice(0, wordsPerLine).join(' ') + '...';
  }
  return<>
      <div>
        <p className='text-1xl'>{firstLine}</p>
        {secondLine && (
             <p className='ellipse text-1xl'>{secondLine}</p> 
        )}
      </div>
  </>
    
}
WordsSplit.propTypes = {
  text: PropTypes.string.isRequired,
  wordsPerLine: PropTypes.number.isRequired,
};

export default WordsSplit

