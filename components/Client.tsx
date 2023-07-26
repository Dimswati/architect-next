const Client = ({ imageUrl, clientName }: Client) => {
  return (
    <div className="border border-neutral-300">
      <img src={imageUrl} alt={clientName} />
    </div>
  )
}

export default Client