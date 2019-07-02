import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { addImage, addImageList } from '../../actions/galleryActions'
import styles from './gallery.scss'
import Project from '../../components/project/Project'
import Search from '../../components/search/Search'

class GalleryContainer extends Component {

    render() {
        const { gallery, addImageAction, addImageListAction } = this.props
        const gallerylist = gallery.arrayImage
        
        return (
            <React.Fragment>
                <section className={styles.gallery}>
                    <Search onSubmit={addImageListAction} btnType={'btn_loader'} />
                    <div className={styles.gallery__inner}>
                        {
                            (typeof gallerylist ===  'object') ?
                            gallerylist.map((item, index) => {
                                return <Project img={item.url} key={index}/>
                            }) : null
                        }
                        
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

const mapStateToProps = store => {
    return {
        gallery: store.gallery,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addImageAction: image => dispatch(addImage(image)),
        addImageListAction: imageList => dispatch(addImageList(imageList))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GalleryContainer)
