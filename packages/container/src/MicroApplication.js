import React from 'react';

class MicroApplication extends React.Component {

  // 下载和安装微应用的触发器
  componentDidMount() {
    const { name, host, document } = this.props;
    const scriptId = `micro-frontend-script-${name}`;

    if (document.getElementById(scriptId)) {
      this.renderMicroApplication();
      return;
    }

    // 通过资源清单获取入口文件脚本
    fetch(`${host}/asset-manifest.json`)
      .then(res => res.json())
      .then(manifest => {
        const script = document.createElement('script');
        script.id = scriptId;
        script.crossOrigin = '';
        script.src = `${host}${manifest.files['main.js']}`;
        script.onload = this.renderMicroApplication;
        document.head.appendChild(script);
      });
  }

  componentWillUnmount() {

    const { name, window } = this.props;

    window[`unmount${name}`](`${name}-container`);
  }

  renderMicroApplication = () => {
    const { name, window, history } = this.props;
    window[`render${name}`](`${name}-container`, history);
  };

  render() {
    const { name } = this.props;
    return <main id={`${name}-container`} />;
  }
}

MicroApplication.defaultProps = {
  document,
  window,
};

export default MicroApplication;