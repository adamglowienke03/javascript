type TComponentProps = {
    params: Promise<{
        slug?: string[]
    }>
}

export default async function SearchPage(props: TComponentProps) {
    const params = await props.params
    return (
        <article>
            <section>
                Params: {params.slug && params.slug.toString()}
            </section>
        </article>
    )
}
