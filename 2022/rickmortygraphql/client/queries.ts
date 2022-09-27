import { gql } from '@apollo/client'
export const characters = gql`query{
    characters(page:1){
      results{
        name
      }
    }
    }`