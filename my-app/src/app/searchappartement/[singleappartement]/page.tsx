import React from 'react'

type PathnameID = {
    params: {
        singleappartement: string;
    }
}
export default async function page({params}: PathnameID) {
    const AppartementID = params.singleappartement;
  return (
    <main>
      {AppartementID}
    </main>
  )
}
