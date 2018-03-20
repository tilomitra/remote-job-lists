import { Component } from "react";
import Tag from "./Tag";
import feather from "feather-icons";
import { Badge } from "reactstrap";
import moment from "moment";
class Leadline extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        feather.replace();
    }
    render() {
        let { search, tags, count, from, to } = this.props;
        let leadLine,
            tagjsx = [],
            datejsx;

        if (tags) {
            tagjsx = tags.split(",").map(t => {
                return <Tag name={t} key={t} />;
            });
        }

        if (from && to) {
            datejsx = (
                <span style={{ margin: "5px 0" }}>
                    between {moment(from).format("ll")} and{" "}
                    {moment(to).format("ll")},{" "}
                </span>
            );
        }

        let resetBtn = (
            <a
                className="reset"
                onClick={() => {
                    this.props.onSearch("");
                }}
            >
                <i data-feather="x-circle" />
                Reset filters
            </a>
        );

        if (!search && !tags) {
            leadLine = (
                <section className="text-center job-list-lead">
                    <h5 className="title">
                        Showing{" "}
                        <Badge color={"primary"}>{count} remote jobs</Badge>{" "}
                        {datejsx}
                        across all categories and employers
                    </h5>
                    {datejsx ? resetBtn : null}
                </section>
            );
        } else if (search && !tags) {
            leadLine = (
                <section className="text-center job-list-lead">
                    <h5 className="title">
                        Showing{" "}
                        <Badge color={"primary"}>{count} remote jobs</Badge>{" "}
                        related to <span className="term">{search}</span>{" "}
                        {datejsx}
                    </h5>
                    {resetBtn}
                </section>
            );
        } else if (search && tags) {
            leadLine = (
                <section className="text-center job-list-lead">
                    <h5 className="title">
                        Showing{" "}
                        <Badge color={"primary"}>{count} remote jobs</Badge>{" "}
                        that match <span className="term">{search}</span>{" "}
                        {datejsx} with tags <br /> {tagjsx}
                    </h5>
                    {resetBtn}
                </section>
            );
        } else if (!search && tags) {
            leadLine = (
                <section className="text-center job-list-lead">
                    <h5 className="title">
                        Showing{" "}
                        <Badge color={"primary"}>{count} remote jobs</Badge>{" "}
                        {datejsx}
                        with tags <br /> {tagjsx}
                    </h5>
                    {resetBtn}
                </section>
            );
        }

        return <section className="app-leadline">{leadLine}</section>;
    }
}

export default Leadline;
