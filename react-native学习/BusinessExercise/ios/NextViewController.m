//
//  NextViewController.m
//  BusinessExercise
//
//  Created by ddn on 16/8/18.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "NextViewController.h"

#import "YJReactView.h"

@interface NextViewController ()

@end

@implementation NextViewController

- (void)loadView {
  self.view = [YJReactView new];
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

//- (void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event {
//    [self dismissViewControllerAnimated:YES completion:nil];
//}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
