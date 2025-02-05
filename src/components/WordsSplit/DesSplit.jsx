import React from 'react'
import "./wordsSplit.css"
import PropTypes from 'prop-types';
const DesSplit = () => {
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
DesSplit.propTypes = {
  text: PropTypes.string.isRequired,
  wordsPerLine: PropTypes.number.isRequired,
};

export default DesSplit