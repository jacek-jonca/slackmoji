const faces = [
  'boba',
  'cheeky',
  'crowd-surf',
  'headshot',
  'heart-crown',
  'heart-ring',
  'party',
  'planet',
  'rainbow-heart',
  'rainbow',
  'smooch1',
  'smooch2',
  'stage',
  'wink'
]

const randomFace = () => {
  const index = Math.floor(Math.random() * faces.length)
  return faces[index]
}

export default () => {
  const face = randomFace()
  return `/faces/${face}.png`
}