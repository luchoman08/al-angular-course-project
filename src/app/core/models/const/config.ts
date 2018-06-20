/**
 * In some cases, the angular router fails if a route does not have any arguments, for example in routes
 * ':id' and 'search/:query', if query is empty angular router is confused and at last match with ':id' route,
 * this broke the correct data flow. Also if search/byquery/:query is a route declared but you want navigate to this 
 * and provide empty value for query, the router catch an error saying than canot find the requested route,
 * in this cases is usefull define an empty search symbol
 */
export const EMPTY_SEARCH_SYMBOL = '_';