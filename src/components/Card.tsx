interface Props {
  name: string,
  quantity: number
}

export const Card = (props: Props) => {
  const srcUrl = `cards/${props.name}.jpg`;
  return (
    <div>
      {/* <img src={srcUrl} style={{
        height: '200px',
      }}/> */}
      <p>{props.quantity} {props.name}</p>
          {/* <button onClick={() => updateCard(index, +1)}> + </button>
          <button onClick={() => updateCard(index, -1)}> - </button> */}
    </div>
  )
}