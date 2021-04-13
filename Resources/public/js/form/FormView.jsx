/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        7
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
 *
 */

import React, {Component, Suspense} from "react";

const MapperButton = React.lazy(() => import("./button/MapperButton.jsx"));
const FormMapperField = React.lazy(() => import("./fields/FormMapperField.jsx"));

export default class FormView extends Component {

  constructor(props) {
    super(props);

    this.activeButton = null;

    this.state = {
      errorTexts: {},
      loading: false
    };

    if (props.component.toggleableLayout) {
      this.state.toggled = false;
    }

    this.submitForm = this.submitForm.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    this.setState({
      toggled: !this.state.toggled
    });
  }


  render() {
    let buttons = [];
    let wrappedFields = [];
    this.props.component.buttons.forEach(function (button, index) {
      buttons.push(<Suspense fallback={<div style={{textAlign: "center", margin: "auto"}}><img src="bundles/con4gisframework/img/preloader-image.svg" className="preloader-image" alt=""/></div>} key={index}>
        <MapperButton key={index} form={this} button={button} languageRefs={this.props.languageRefs}/>
      </Suspense>);
    }, this);

    let loadingAnimation = null;
    if (this.state.loading) {
      loadingAnimation = <div style={{textAlign: "center", margin: "auto"}}><img src="bundles/con4gisframework/img/preloader-image.svg" className="preloader-image" alt=""/></div>;
    }

    let headline = null;
    if (this.props.component.headline) {
      headline = <span className={"form-headline"}>{this.props.component.headline}</span>;
    }

    let fieldContent = this.props.component.fields.map((item, id) => {
      if (item.type === "wrapper") {
        wrappedFields = wrappedFields.concat(item.wrappedFields);
        return <Suspense fallback={<div style={{textAlign: "center", margin: "auto"}}><img src="bundles/con4gisframework/img/preloader-image.svg" className="preloader-image" alt=""/>.</div>} key={id}>
          <FormMapperField key={id} field={item} data={this.props.component.data} parentNode={this}
                           fields={this.props.component.fields} form={this} errorTexts={this.state.errorTexts || {}} languageRefs={this.props.languageRefs}/>
        </Suspense>;
      } else {
        if (!wrappedFields.includes(item.name)) {
          // only render non-wrapped fields
          // since the wrapped fields will be rendered by the wrapper
          return <Suspense fallback={<div style={{textAlign: "center", margin: "auto"}}><img src="bundles/con4gisframework/img/preloader-image.svg" className="preloader-image" alt=""/></div>} key={id}>
            <FormMapperField key={id} field={item} data={this.props.component.data} parentNode={this}
                             form={this} errorText={this.state.errorTexts ? this.state.errorTexts[item.name] : {}} languageRefs={this.props.languageRefs}/>
          </Suspense>;
        }
      }
    });

    if (this.props.component.toggleableLayout) {
      let formClass = this.props.component.toggleableBaseClass + '-form';
      if (this.props.component.class) {
        formClass += ' ' + this.props.component.class
      }
      let buttonLabel = this.props.component.toggleableOffLabel;
      let toggledClass = '';
      if (this.state.toggled) {
        buttonLabel = this.props.component.toggleableOnLabel;
        toggledClass = ' ' + this.props.component.toggleableOnClass;
      }
      return <div className={this.props.component.toggleableBaseClass + '-outer' + toggledClass}
                  hidden={this.props.component.hidden}>
        <div className={this.props.component.toggleableBaseClass + '-inner'}>
          <div className={this.props.component.toggleableBaseClass + '-button-wrapper' + toggledClass}>
            <button className={this.props.component.toggleableBaseClass + '-button' + toggledClass}
                    onClick={this.toggleForm}>
              {buttonLabel}
            </button>
          </div>
          <div className={this.props.component.toggleableBaseClass + '-form-wrapper' + toggledClass}>
            <form className={formClass}
                  onSubmit={(event) => this.submitForm(event)}
                  method={this.props.component.method}>
              {headline}
              {fieldContent}
              <div className={this.props.component.buttonWrapperClass}>
                {loadingAnimation}
                {buttons}
              </div>
            </form>
          </div>
        </div>
      </div>;
    } else if (this.props.component.containerRow) {
      if (this.props.component.renderAsForm) {

        return (
          <form className={this.props.component.class || "form-view"}
                onSubmit={(event) => this.submitForm(event)}
                method={this.props.component.method}>
            <div className={"container"}>
              <div className={"row"}>
                {headline}
                {fieldContent}
                <div className={this.props.component.buttonWrapperClass}>
                  {loadingAnimation}
                  {buttons}
                </div>

              </div>
            </div>
          </form>
        );
      }
      else {
        return (
          <div className={this.props.component.class || "form-view"}
               method={this.props.component.method}>
            <div className={"container"}>
              <div className={"row"}>
                {headline}
                {fieldContent}
                <div className={this.props.component.buttonWrapperClass}>
                  {loadingAnimation}
                  {buttons}
                </div>

              </div>
            </div>
          </div>
        );
      }
    } else {
      if (this.props.component.renderAsForm) {
        return (
          <form className={this.props.component.class || "form-view"} onSubmit={(event) => this.submitForm(event)}
                method={this.props.component.method}>
            {headline}
            {fieldContent}
            <div className={this.props.component.buttonWrapperClass}>
              {loadingAnimation}
              {buttons}
            </div>
          </form>
        );
      } else {
        return (
          <div className={this.props.component.class || "form-view"}
               method={this.props.component.method}>
            {headline}
            {fieldContent}
            <div className={this.props.component.buttonWrapperClass}>
              {loadingAnimation}
              {buttons}
            </div>
          </div>
        );
      }
    }
  }

  submitForm(event) {

    this.activeButton.submitCallback(this, event);
  }

  storePosition() {
    if (this.props.component.preservePosition) {
      const storage = window.localStorage;
      storage.setItem("formPosition", document.documentElement.scrollTop + "");
    }
  }

  setErrorTexts(errorTexts) {
    this.setState({errorTexts: errorTexts});
  }

  setLoading(loading) {
    this.setState({loading: loading});
  }

  componentDidMount() {
    if (this.props.component.preservePosition) {
      const storage = window.localStorage;
      let scrollValue = storage.getItem("formPosition");
      if (scrollValue) {
        window.setTimeout(() => {
          document.documentElement.scrollTop = parseInt(scrollValue);
        }, 3000);
      }
      // clear entry to avoid errors
      storage.removeItem("formPosition");
    }
  }
}