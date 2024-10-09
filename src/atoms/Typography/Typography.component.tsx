import {
  Heading2,
  Heading3,
  LabelM1,
  LabelS1,
  LabelXS1,
  LabelXS2,
} from './Typography.styles'

const TypographyDisplay = () => {
  return (
    <div>
      <Heading3>Heading 3</Heading3>
      <Heading2>Heading 2</Heading2>
      <hr />
      <LabelXS1>Label XS 1</LabelXS1>
      <br />
      <LabelXS2>Label XS 2</LabelXS2>
      <hr />
      <LabelS1>Label S 1</LabelS1>
      <hr />
      <LabelM1>Label M 1</LabelM1>
    </div>
  )
}

export default TypographyDisplay
