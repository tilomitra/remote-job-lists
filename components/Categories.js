import { Component } from 'react';
import Tags from '../connections/tags';
import forEach from 'lodash/forEach';
import remove from 'lodash/remove';
import Router from 'next/router';
import cn from 'classnames';
import feather from 'feather-icons';

class Categories extends Component {
    constructor(props) {
        super(props);

        const { selectedCategories } = this.props;
        this.state = {
            selected: selectedCategories ? selectedCategories.split(',') : []
        }
    }

    componentDidMount() {
        feather.replace()
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
                    className="col-sm-12 col-md-6"
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
                <section className="card">
                    <div className="card-body">

                        <h5>Filter Job Listings
                    <p className="lead">Use the tags below to filter your job search.</p>
                        </h5>
                        <div className="row no-gutters">
                            {categories}
                        </div>

                    </div>
                </section>
            </section>
        )
    }
}

export default Categories;