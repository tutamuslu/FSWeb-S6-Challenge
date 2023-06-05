import { Pagination, PaginationItem, PaginationLink } from "reactstrap"

const Sayfalama = (props) => {

    const {handleChangePage, increasePage, decreasePage, firstPage, lastPage} = props

    return (
        <Pagination>
            <PaginationItem>
                <PaginationLink
                    first
                    href="#"
                    onClick={firstPage}
                />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink
                    href="#"
                    previous
                    onClick={increasePage}
                />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#" onClick={handleChangePage}>
                    1
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#" onClick={handleChangePage}>
                    2
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#" onClick={handleChangePage}>
                    3
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#" onClick={handleChangePage}>
                    4
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#" onClick={handleChangePage}>
                    5
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#" onClick={handleChangePage}>
                    6
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#" onClick={handleChangePage}>
                    7
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#" onClick={handleChangePage}>
                    8
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink
                    href="#"
                    next
                    onClick={decreasePage}
                />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink
                    href="#"
                    last
                    onClick={lastPage}
                />
            </PaginationItem>
        </Pagination>
    )

}

export default Sayfalama