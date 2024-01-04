// type DummyProps = { [K in Exclude<keyof CardProps, 'owner'>]?: CardProps[K] }

// async function DummyAdvertCardContent(props: DummyProps & { user: User }) {
//   const user = props.user

//   return (
//     <Card
//       name={props.name ?? 'Titre'}
//       description={props.description ?? 'Description'}
//       domain={props.domain ?? { name: 'Domaines' }}
//       type={props.type ?? { name: 'Catégorie' }}
//       gradient={await generateRandomGradient()}
//       owner={{
//         first_name: user.first_name ?? 'Prénom',
//         last_name: user.last_name ?? 'Nom',
//         image: user.image ?? '#',
//       }}
//       onBookmark={() => {}}
//       bookmarked={false}
//       disableActions
//     />
//   )
// }

// export function DummyAdvertCard(props: DummyProps) {
//   const session = useSession()
//   if (!session?.data?.user) return <></>

//   const user = session.data.user

//   return (
//     <Suspense fallback={<AdvertCardSkeleton />}>
//       <DummyAdvertCardContent
//         user={user}
//         {...props}
//       />
//     </Suspense>
//   )
// }
