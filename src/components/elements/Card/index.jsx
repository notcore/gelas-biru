const Produk = () => {
    return (
        <>
<article className="card shadow-md ">
  <section className="card__hero w-[250px] overflow-hidden h-[200px]">
    <header className="card__hero-header">
      <span>Rp.50.000</span>
      <div className="card__icon">
      </div>
    </header>

    <img src="/resource/img/motion.gif" className="-ml-5 object-cover"></img>
  </section>

  <footer className="card__footer">
    <div className="card__job-summary">
      <div className="card__job-icon">
       <img src="/resource/logo/azero.png" className="bg-gradient-darkblue w-[20px] h-[20px] rounded-full"/>
      </div>
      <div className="card__job">
        <p className="card__job-title">
            azero
        </p>
      </div>
    </div>
  </footer>
</article>

</>
    )
}

export default Produk;