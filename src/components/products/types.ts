export type ApiResponse = {
  id: number
  thumbnails: [
    {
      id: number
      image: string
      detail: string
    },
  ]
  crop_name: string
  index: number
  service_cost: null | number
  payment_link: string
}