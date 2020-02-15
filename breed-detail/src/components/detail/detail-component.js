import React from 'react';
import PropTypes from 'prop-types';

import ProgressBar from '../progress-bar';

const total = 5;
const integerToText = int => int === 1 ? 'Yes' : 'No';

const Detail = ({ breed, className }) => (
  <div className={`${className} breed-detail`}>
    <div className="breed-detail__image" />
    <h1 className="breed-detail__name">{breed.name} <small>{breed.origin}</small></h1>
    <h3 className="breed-detail__temperament">{breed.temperament}</h3>
    <p className="breed-detail__description">{breed.description}</p>
    <div className="attributes">
      <div className="attributes__left">
        <ul>
          <li><b>Life span</b> {breed.life_span} years</li>
          <li><b>Adaptability</b> <ProgressBar total={total} percent={breed.adaptability} /></li>
          <li><b>Child friendly</b> <ProgressBar total={total} percent={breed.child_friendly} /></li>
          <li><b>Energy level</b> <ProgressBar total={total} percent={breed.energy_level} /></li>
          <li><b>Health issues</b> <ProgressBar total={total} percent={breed.health_issues} /></li>
          <li><b>Shedding level</b> <ProgressBar total={total} percent={breed.shedding_level} /></li>
          <li><b>Stranger friendly</b> <ProgressBar total={total} percent={breed.stranger_friendly} /></li>
          <li><b>Experimental</b> {integerToText(breed.experimental)}</li>
          <li><b>Natural</b> {integerToText(breed.natural)}</li>
          <li><b>Rex</b> {integerToText(breed.rex)}</li>
          <li><b>Short legs</b> {integerToText(breed.short_legs)}</li>
        </ul>
      </div>
      <div className="attributes__right">
        <ul>
          <li><b>Weight</b> {breed.weight.metric} kg</li>
          <li><b>Affection level</b> <ProgressBar total={total} percent={breed.affection_level} /></li>
          <li><b>Dog friendly</b> <ProgressBar total={total} percent={breed.dog_friendly} /></li>
          <li><b>Grooming</b> <ProgressBar total={total} percent={breed.grooming} /></li>
          <li><b>Intelligence</b> <ProgressBar total={total} percent={breed.intelligence} /></li>
          <li><b>Social needs</b> <ProgressBar total={total} percent={breed.social_needs} /></li>
          <li><b>Vocalisation</b> <ProgressBar total={total} percent={breed.vocalisation} /></li>
          <li><b>Hairless</b> {integerToText(breed.hairless)}</li>
          <li><b>Rare</b> {integerToText(breed.rare)}</li>
          <li><b>Suppressed tail</b> {integerToText(breed.suppressed_tail)}</li>
          <li><b>Hypoalergenic</b> {integerToText(breed.hypoallergenic)}</li>
        </ul>
      </div>
    </div>
  </div>
);

Detail.propTypes = {
  breed: PropTypes.object,
};

Detail.defaultProps = {
  breed: {},
};

export default Detail;
