import { TranslationInterface } from './translation.interface';
import { Review } from '../social/review.model';
import { Movie } from '../movie.model';
import { Results } from '../results.model';
import {
    Image,
    Genre,
    Cast,
    Crew,
    Video
  } from '../';
import { KeywordsInterface } from './keyword.interface';
import { CountryInterface } from './country.interface';
import { CompanyInterface } from './company.interface';
import { LanguageInterface } from './language.interface';
import { CreditsModel } from '@app/core';

  export interface MovieInterface extends Movie{
    
  }
