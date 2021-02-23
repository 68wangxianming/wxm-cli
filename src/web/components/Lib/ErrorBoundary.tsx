import {Component, ErrorInfo, ReactNode, ReactElement} from 'react';

interface Props {
  children: ReactNode;
  fallbackRender: ({error}: { error: Error | null }) => ReactElement;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  //当子组件抛出异常 这里会接收到并且调用
  public static getDerivedStateFromError(_: Error): State {
    // console.log('🍌', _);
    return {hasError: true};
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // 嵌入SDK
    console.log('报告错误🧓', error, errorInfo);
  }

  public render() {
    const {children, fallbackRender} = this.props;
    const {hasError} = this.state;
    if (hasError) {
      //   return <h1>不好意思，系统错误❎</h1>;
      return fallbackRender({error: new Error('系统组件出错')});
    }
    return children;
  }
}

export default ErrorBoundary;
