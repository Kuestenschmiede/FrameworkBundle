/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2025, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";
import Vimeo from '@u-wave/react-vimeo';
import YouTube from 'react-youtube';

export default class DetailVideoPreviewField extends Component {

  constructor(props) {
    super(props);

    const data = props.data[props.field.name];

    let initialHasPreviewImage = (typeof data.videoPreviewImage !== "undefined")
      && (data.videoPreviewImage !== null);

    this.state = {
      hasPreviewImage: initialHasPreviewImage,
      reloading: false,
    };
  }

  render() {
    let data = this.props.data[this.props.field.name];
    // data.video can be an ID or an URL
    if (!(data && data.videoType && data.video)) {
      // not enough data
      return null;
    }
    let content = null;
    if (data.videoType === "youtube") {
      // let videoId = data.video.replace("https://www.youtube.com/watch?v=", "");
      let videoId = this.parseVideoId(data.video);
      content = <YouTube videoId={videoId} opts={{
        origin: window.location.href,
        host: 'https://www.youtube-nocookie.com',
        height: '100%',
        width: '100%'
      }} className={"video-preview-youtube"}/>
    } else if (data.videoType === "vimeo") {
      content = <Vimeo video={data.video} />
    } else {
      // no valid data
      content = null;
    }

    if (this.state.hasPreviewImage) {
      let altName = this.props.data[this.props.field.name].alt;
      return <div className={this.props.field.class}>
          <a onClick={() => this.setState({hasPreviewImage: false})}>
            <img src={data.videoPreviewImage.src} alt={altName} title={altName} style={{width: "100%", height: "100%"}}/>
          </a>
        </div>;
    }

    if (window.klaroConfig && klaro) {
      let manager = klaro.getManager();
      if ((data.videoType === "youtube" && manager.getConsent('youtubeVideo'))
        || (data.videoType === "vimeo" && manager.getConsent('vimeoVideo'))) {
        return (
          <div className={this.props.field.class}>
            <div className="embed-responsive embed-responsive-16by9">
              {content}
            </div>
          </div>
        );
      } else {
        // no consent given, display nothing
        return null;
      }
    } else {
      return (
        <div className={this.props.field.class}>
          <div className="embed-responsive embed-responsive-16by9">
            {content}
          </div>
        </div>
      );
    }
  }

  parseVideoId(videoUrl) {
    if (videoUrl.startsWith("https://www.youtube.com/watch?v=")) {
      return videoUrl.replace("https://www.youtube.com/watch?v=", "");
    }
    if (videoUrl.startsWith("https://youtu.be/")) {
      return videoUrl.replace("https://youtu.be/", "");
    }
    if (videoUrl.startsWith("https://www.youtube.com/embed/")) {
      return videoUrl.replace("https://www.youtube.com/embed/", "");
    }
    if (videoUrl.startsWith("https://www.youtube-nocookie.com/embed/")) {
      return videoUrl.replace("https://www.youtube-nocookie.com/embed/", "");
    }
  }

  componentDidMount() {
    if (window.klaroConfig && klaro) {
      let manager = klaro.getManager();
      manager.watch({update: (objManager, name, data) => {
          this.setState({reloading: !this.state.reloading});
        }
      });
    }
  }
}