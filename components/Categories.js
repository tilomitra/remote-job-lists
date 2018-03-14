import { Component } from 'react';
import Tags from '../connections/tags';
import forEach from 'lodash/forEach';
import remove from 'lodash/remove';
import Router from 'next/router';
import cn from 'classnames';
import feather from 'feather-icons';
import { Collapse, Button } from 'reactstrap';

class Categories extends Component {
    constructor(props) {
        super(props);

        const { selectedCategories } = this.props;
        this.state = {
            selected: selectedCategories ? selectedCategories.split(',') : [],
            isOpen: false
        }
    }

    componentDidMount() {
        feather.replace()
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    onCategoryClick = (tag) => {
        let selected = this.state.selected;
        const isSelected = selected.indexOf(tag) > -1 ? true : false;

        if (isSelected) {
            remove(selected, (val) => { return val === tag });
        } else {
            selected.push(tag);
        }

        this.setState({ selected });
        Router.push({
            pathname: '/',
            query: {
                tags: selected.join(',')
            }
        })
    }

    render() {

        let categories = [];
        const { selected } = this.state;

        forEach(Tags, ({ icon }, tag) => {
            const isSelected = selected.indexOf(tag) > -1 ? true : false;
            categories.push(
                <div
                    className="col-xs-6 col-sm-4 col-md-2"
                    key={`category-${tag}`}
                    onClick={() => { this.onCategoryClick(tag); }}>
                    <section className={cn("app-category", { selected: isSelected })}>
                        <i data-feather={icon} className="app-category-icon"></i>
                        <span className="app-category-tag">{tag}</span>
                    </section>
                </div>
            );
        }, this);

        return (
            <section className="app-categories sticky-top" style={{ top: 80 }}>
                <div className="row">
                    <div className="col-sm-12">
                        <Button size="sm" block onClick={this.toggle} style={{ marginBottom: '1rem' }}>
                            {this.state.isOpen ? "Hide" : "Show"} Job Filters
                        </Button>
                    </div>

                </div>
                <Collapse isOpen={this.state.isOpen}>
                    <div className="row no-gutters">
                        {categories}
                    </div>
                </Collapse>
            </section>
        )
    }
}

export default Categories;