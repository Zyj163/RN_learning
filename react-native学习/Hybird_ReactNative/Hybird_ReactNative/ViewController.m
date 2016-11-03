//
//  ViewController.m
//  Hybird_ReactNative
//
//  Created by ddn on 16/8/18.
//  Copyright © 2016年 张永俊. All rights reserved.
//

#import "ViewController.h"
#import "RCTRootView.h"

//启动服务器, cd 到当前项目，cd Pods/React; npm run start
@interface ViewController ()

@end

@implementation ViewController

- (void)loadView {
    NSURL *jsCodeLocation;
    jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                        moduleName:@"YJReactView"
                                                 initialProperties:nil
                                                     launchOptions:nil];
    self.view = rootView;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    
}

@end
