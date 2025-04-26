import PageNav from '../components/PageNav'

export default function Pricing() {
  return (
    <>
      <PageNav />
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-4">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Pricing Plans
          </h1>
          <p className="text-gray-600">
            Choose a plan that fits your trekking lifestyle. Simple pricing with
            no hidden fees.
          </p>
        </div>
      </section>
    </>
  )
}
