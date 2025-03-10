export interface Review {
    id: number
    userId: number
    restaurantId: number
    title: string
    content: string
    createdOn: string
    isActive: boolean
    reviewCriteria: ReviewCriterion[]
    reviewImage: ReviewImage[]
    voteReview: VoteReview[]
    upVotes: number
    downVotes: number
    hasVoted : VoteReview[]
  }
  
  export interface ReviewCriterion {
    location: number
    price: number
    quality: number
    service: number
    space: number
  }
  
  export interface ReviewImage {
    imgPath: string
    publicId: string
  }
  
  export interface VoteReview {
    userId: number
    type: boolean
    isActive: boolean
  }

  export interface ReviewModelSent{
    revTitle : string
    revContent : string
    revLocation : number
    revPrice : number
    revQuality : number
    revService : number
    revSpace : number
    revImages : File[]
  }