import { Component } from 'react';
import Tags from '../connections/tags';
import forEach from 'lodash/forEach';
import remove from 'lodash/remove';
import Router from 'next/router';
import cn from 'classnames';


class Categories extends Component {
    constructor(props) {
        super(props);

        const { selectedCategories } = this.props;
        this.state = {
            selected: selectedCategories ? selectedCategories.split(',') : []
        }
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

        forEach(Tags, (keywords, tag) => {
            const isSelected = selected.indexOf(tag) > -1 ? true : false;
            categories.push(
                <div
                    className="col-3"
                    key={`category-${tag}`}
                    onClick={() => { this.onCategoryClick(tag); }}>
                    <section className={cn("app-category", { selected: isSelected })}>
                        {tag}
                    </section>
                </div>
            );
        }, this);

        return (
            <section className="app-categories">
                <h5>Categories</h5>
                <div className="row">
                    {categories}
                </div>
            </section>
        )
    }
}

export default Categories;